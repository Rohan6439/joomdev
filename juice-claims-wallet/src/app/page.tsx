'use client';

import { ClaimsWalletCardPlus } from '@/app/components/ClaimsWalletCardPlus';
import { ClaimsWalletMax } from '@/app/components/ClaimsWalletMax';
import { HelpSidebarBase } from '@/app/components/HelpSidebarBase';
import { PageHelpButton } from '@/app/components/PageHelpButton';
import { useState } from 'react';

export default function HomePage() {
  const [helpOpen, setHelpOpen] = useState(false);

  return (
    <div className="p-8 flex flex-col gap-8">
      <ClaimsWalletCardPlus balance={54250} />

      <ClaimsWalletMax balance={54250} />

      <PageHelpButton isOpen={helpOpen} onClick={() => setHelpOpen(!helpOpen)} />

      <HelpSidebarBase
        isOpen={helpOpen}
        onClose={() => setHelpOpen(false)}
        content={{
          title: "Need Help?",
          description: "Here's some useful info about JuiceFin features.",
          features: [
            { title: "Wallets", description: "Manage your claims wallet." },
            { title: "Payments", description: "Send and receive payments securely." }
          ],
        }}
      />
    </div>
  );
}
