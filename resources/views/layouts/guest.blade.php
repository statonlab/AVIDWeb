<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'AVID Deer') }}</title>

    <script src="{{ mix('/js/guest.js') }}" defer></script>

    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito:200,400,600&display=swap" rel="stylesheet">

    <!-- Styles -->
    <link href="{{ mix('/css/app.css') }}" rel="stylesheet">
</head>
<body>
@yield('content')

@yield('scripts')
<link href="https://unpkg.com/ionicons@4.5.10-0/dist/css/ionicons.min.css" rel="stylesheet">
</body>
</html>
