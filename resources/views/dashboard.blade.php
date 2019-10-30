<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'AVID Deer') }}</title>

    <script src="{{ asset('js/app.js') }}" defer></script>

    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito:200,400,600&display=swap" rel="stylesheet">

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    <link href="https://unpkg.com/ionicons@4.5.10-0/dist/css/ionicons.min.css" rel="stylesheet">

    <script>
      window.avid = {
        user: null,
        csrf: '{{ csrf_token() }}',
      }

      @if(auth()->check())
        window.avid.user = {!!  json_encode(auth()->user()->only(['id', 'name', 'avatar']))  !!}
        window.avid.user.role = {!!  json_encode(auth()->user()->role->only(['id', 'name']))  !!}
        @endif
    </script>
</head>
<body>
<div id="app">
    <!-- render app using vue -->
    <app/>
</div>
</body>
</html>
