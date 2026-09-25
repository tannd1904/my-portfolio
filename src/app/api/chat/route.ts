import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, contact, message, timestamp } = body;

    if (!message || typeof message !== 'string') {
      return NextResponse.json(
        { error: 'Message content is required.' },
        { status: 400 }
      );
    }

    const senderName = name?.trim() || 'Portfolio Visitor';
    const senderContact = contact?.trim() || 'Not provided';
    const cleanMessage = message.trim();
    const timeFormatted = timestamp || new Date().toLocaleString('en-US', { timeZone: 'Asia/Ho_Chi_Minh' });

    let forwarded = false;
    const forwardErrors: string[] = [];

    // 1. Forward via Telegram Bot API (Instant mobile notification)
    const telegramToken = process.env.TELEGRAM_BOT_TOKEN;
    const telegramChatId = process.env.TELEGRAM_CHAT_ID;

    if (telegramToken && telegramChatId) {
      try {
        const textPayload = 
          `🔔 *New Inquiry on Portfolio Website*\n\n` +
          `👤 *Name:* ${senderName}\n` +
          `📞 *Contact:* ${senderContact}\n` +
          `🕒 *Time:* ${timeFormatted}\n\n` +
          `💬 *Message:*\n${cleanMessage}`;

        const tgRes = await fetch(
          `https://api.telegram.org/bot${telegramToken}/sendMessage`,
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              chat_id: telegramChatId,
              text: textPayload,
              parse_mode: 'Markdown',
            }),
          }
        );

        if (tgRes.ok) {
          forwarded = true;
        } else {
          const err = await tgRes.text();
          forwardErrors.push(`Telegram API: ${err}`);
        }
      } catch (err: any) {
        forwardErrors.push(`Telegram Fetch Error: ${err.message}`);
      }
    }

    // 2. Forward via Webhook (Discord / Slack / Generic Webhook)
    const webhookUrl = process.env.FORWARD_WEBHOOK_URL || process.env.DISCORD_WEBHOOK_URL;
    if (webhookUrl) {
      try {
        const hookRes = await fetch(webhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            content: `🔔 **New Portfolio Message from ${senderName}** (${senderContact}):\n> ${cleanMessage.replace(/\n/g, '\n> ')}`,
          }),
        });
        if (hookRes.ok) {
          forwarded = true;
        }
      } catch (err: any) {
        forwardErrors.push(`Webhook Error: ${err.message}`);
      }
    }

    // Server-side console audit log
    console.log('[PORTFOLIO_INQUIRY]', {
      name: senderName,
      contact: senderContact,
      message: cleanMessage,
      time: timeFormatted,
      forwarded,
      errors: forwardErrors.length > 0 ? forwardErrors : undefined,
    });

    return NextResponse.json({
      success: true,
      forwarded,
      message: forwarded
        ? 'Your message was immediately forwarded to Tan!'
        : 'Your message was captured and will be reviewed shortly by Tan.',
    });
  } catch (error: any) {
    console.error('Error processing contact forward:', error);
    return NextResponse.json(
      { error: 'Internal server error processing message.' },
      { status: 500 }
    );
  }
}
