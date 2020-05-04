@component('mail::message')
Hello{{ $invitation->name ? " $invitation->name" : '' }},

{{ $invitation->user->name }} has invited you to join their group ({{ $invitation->group->name }}) on AVID.
Use the button bellow to accept the invitation and join the group.

@component('mail::button', ['url' => url("/invitations/$invitation->id/accept?auth=$invitation->token")])
Accept Invitation
@endcomponent

Thanks,<br>
{{ config('app.name') }}
@endcomponent
