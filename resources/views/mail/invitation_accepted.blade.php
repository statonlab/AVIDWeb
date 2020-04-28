@component('mail::message')
Hello {{ $invitation->user->name }},

{{ $invitation->name }} has accepted your invitation to join {{ $invitation->group->name }}.

@component('mail::button', ['url' => url("/app/groups/$invitation->group_id")])
View Group
@endcomponent

Thanks,<br>
{{ config('app.name') }}
@endcomponent
