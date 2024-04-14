# Basejump Nextjs Starter

Adds a Nextjs starter app on top of [Basejump core](https://github.com/usebasejump/basejump). This is a complete interface with support for personal accounts, team accounts, invitations, managing members/permissions and subscription billing.

[Learn more at usebasejump.com](https://usebasejump.com). Ask questions [on X / Twitter](https://twitter.com/tiniscule)

![Image Description](./public/images/basejump-team-page.png)

## Features

- **Basic Dashboard**: A basic dashboard implementation restricted to authenticated users
- **User Authentication**: Support for email/password - but add any auth provider supported by Supabase
- **Personal accounts**: Every user that signs up using Supabase auth automatically gets their own personal account.
  Billing on personal accounts can be enabled/disabled.
- **Team accounts**: Team accounts are billable accounts that can be shared by multiple users. Team accounts can be
  disabled if you only wish to allow personal accounts. Billing on team accounts can also be disabled.
- **Billing**: Basejump provides out of the box billing support for Stripe, but you can add your own providers easily.
  If you do, please consider contributing them so others can benefit!

## Quick Start

Once you've gotten your [Basejump project setup](https://github.com/usebasejump/basejump), you can add the Nextjs starter by running:

```bash
yarn create next-app -e https://github.com/usebasejump/basejump-next
```

Then add your Supabase URL and anon key to your `.env.local` file. There's an example in the `.env.example` file.


## Contributing

Yes please! Please submit a PR with your changes to [the basejump-next github repo](https://github.com/usebasejump/basejump-next).

You can contribute in the following places:
- [Basejump core](https://github.com/usebasejump/basejump)
- [Basejump Nextjs](https://github.com/usebasejump/basejump-next)
- [Basejump edge functions / billing functions](https://github.com/usebasejump/basejump-deno-packages)
- [Supabase Test Helpers](https://github.com/usebasejump/supabase-test-helpers)