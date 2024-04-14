# Basejump Nextjs Starter

Adds a Nextjs starter app on top of [Basejump core](https://github.com/usebasejump/basejump). This is a complete interface with support for personal accounts, team accounts, invitations, managing members/permissions and subscription billing.

[Learn more at usebasejump.com](https://usebasejump.com). Ask questions [on X / Twitter](https://twitter.com/tiniscule)

## Features

- **Basic Dashboard**: A basic dashboard implementation restricted to authenticated users
- **User Authentication**: Support for email/password - but add any auth provider supported by Supabase
- **Personal accounts**: Every user that signs up using Supabase auth automatically gets their own personal account.
  Billing on personal accounts can be enabled/disabled.
- **Team accounts**: Team accounts are billable accounts that can be shared by multiple users. Team accounts can be
  disabled if you only wish to allow personal accounts. Billing on team accounts can also be disabled.
- **Billing**: Basejump provides out of the box billing support for Stripe, but you can add your own providers easily.
  If you do, please consider contributing them so others can benefit!

## Quick Start (recommended)

Check out the getting started guide at [usebasejump.com](https://usebasejump.com).

## Contributing

Yes please! Please submit a PR with your changes to [the basejump-next github repo](https://github.com/usebasejump/basejump-next).

You can contribute in the following places:
- [Basejump core](https://github.com/usebasejump/basejump)
- [Basejump Nextjs](https://github.com/usebasejump/basejump-next)
- [Basejump edge functions / billing functions](https://github.com/usebasejump/basejump-deno-packages)
- [Supabase Test Helpers](https://github.com/usebasejump/supabase-test-helpers)