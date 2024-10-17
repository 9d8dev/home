// /app/api/clerk-webhook/route.js

import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    // Parse Clerk's webhook payload
    const body = await req.json();

    // Transform the payload for Discord based on event type
    let content = "";
    switch (body.type) {
      case "organization.created":
        content = `New organization created: ${body.data.name} (ID: ${body.data.id})`;
        break;
      case "organization.deleted":
        content = `Organization deleted: ID ${body.data.id}`;
        break;
      case "email.created":
        content = `New user signed up: ${body.data.to_email_address}`;
        break;
      case "user.deleted":
        content = `User deleted: ID ${body.data.id}`;
        break;
      case "user.created":
        content = `New user created: ${body.data.email_addresses[0].email_address} (ID: ${body.data.id})`;
        break;
      default:
        content = `Unhandled event type: ${body.type}`;
    }

    const discordPayload = {
      content,
      username: "Clerk Bot",
    };

    // Send the transformed payload to the Discord webhook
    const discordResponse = await fetch(
      process.env.DISCORD_OUTR_WEBHOOK_URL as string,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(discordPayload),
      },
    );

    if (!discordResponse.ok) {
      return NextResponse.json(
        { error: "Failed to send data to Discord" },
        { status: 500 },
      );
    }

    // Success: Respond with status 200 to Clerk
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Webhook handling error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
