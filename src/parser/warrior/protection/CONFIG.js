import React from 'react';

// import { joshinator } from 'CONTRIBUTORS';
import retryingPromise from 'common/retryingPromise';
import SpellLink from 'common/SpellLink';
import SPELLS from 'common/SPELLS';
import SPECS from 'game/SPECS';
import Warning from 'interface/common/Alert/Warning';

import CHANGELOG from './CHANGELOG';

export default {
  // The people that have contributed to this spec recently. People don't have to sign up to be long-time maintainers to be included in this list. If someone built a large part of the spec or contributed something recently to that spec, they can be added to the contributors list. If someone goes MIA, they may be removed after major changes or during a new expansion.
  contributors: [],
  // The WoW client patch this spec was last updated to be fully compatible with.
  patchCompatibility: '7.3.5',
  // If set to  false`, the spec will show up as unsupported.
  isSupported: false,
  // Explain the status of this spec's analysis here. Try to mention how complete it is, and perhaps show links to places users can learn more.
  // If this spec's analysis does not show a complete picture please mention this in the `<Warning>` component.
  description: (
    <>
      <Warning>
        Hey there! Right now the Protection Warrior parser only holds very basic functionality. What we do show should be good to use, but it does not show the complete picture.<br />
        If there is something missing, incorrect, or inaccurate, please report it on <a href="https://github.com/WoWAnalyzer/WoWAnalyzer/issues/new">GitHub</a> or contact us on <a href="https://discord.gg/AxphPxU">Discord</a>.
      </Warning>
      <Warning>
        Because resets of <SpellLink id={SPELLS.SHIELD_SLAM.id} /> <dfn data-tip="The combatlog does not contain any events for random cooldown resets.">can't be tracked</dfn> properly, any cooldown information of <SpellLink id={SPELLS.SHIELD_SLAM.id} /> should be treated as <dfn data-tip="Whenever Shield Slams would be cast before its cooldown would have expired normally, the cooldown expiry will be set back to the last possible trigger of Revenge, Devastate, Devastator or Thunder Clap. This may lead to higher times on cooldown than you actually experienced in-game.">educated guesses</dfn>.
      </Warning>
    </>
  ),
  // A recent example report to see interesting parts of the spec. Will be shown on the homepage.
  exampleReport: '/report/MfCGYLJ7ZrQchT42/23-Heroic+Vectis+-+Kill+(7:33)/44-Kernelblair',

  // Don't change anything below this line;
  // The current spec identifier. This is the only place (in code) that specifies which spec this parser is about.
  spec: SPECS.PROTECTION_WARRIOR,
  // The contents of your changelog.
  changelog: CHANGELOG,
  // The CombatLogParser class for your spec.
  parser: () => retryingPromise(() => import('./CombatLogParser' /* webpackChunkName: "ProtectionWarrior" */).then(exports => exports.default)),
  // The path to the current directory (relative form project root). This is used for generating a GitHub link directly to your spec's code.
  path: __dirname,
};
