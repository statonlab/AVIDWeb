@component('mail::message')
Hello{{ $invitation->recipient->name ? ' ' . $invitation->recipient->name : '' }},

{{ $invitation->user->name }} wants to share site ({{ $invitation->site->name }}) with you on AVID.
Use the button bellow to accept the invitation and view the site.

@component('mail::button', ['url' => url("/site-invitations/$invitation->id/accept?auth=$invitation->token")])
Accept Invitation
@endcomponent

Thanks,<br>
{{ config('app.name') }}
@endcomponent
