"use client";
// import ""
import '../app/styles/n8n-chat-custom.css';
import '../app/lib/i18n';

import { Header } from '@/app/components/Header';
import { Footer } from '@/app/components/Footer';
import { ChatBubble } from '@/app/components/ChatBubble';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <ChatBubble />
      </body>
    </html>
  );
}