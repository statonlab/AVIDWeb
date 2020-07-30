@component('mail::message')
Hello {{ explode(' ', $user->name)[0] }},

In a previous email, we shared the exciting news about our new website. The following are instructions to help you get started.

## How To Access The New Website

1. Visit <a href="{{ url('/password/reset') }}">aviddeer.com/password/reset</a>
1. Enter your email address ({{ $user->email }}).
1. You will receive an email that contains instructions regarding resetting your password.
1. Once your password has been reset, you can log in using your email address and new password.
1. You will be asked to verify your email after the first time logging in. Please follow the instructions you receive in your email.
1. You can now access your new personalized dashboard by clicking the Dashboard button located at the top-right corner.

@component('mail::button', ['url' => url('/password/reset')])
Reset Password
@endcomponent

Thanks,<br>
{{ config('app.name') }}
@endcomponent
