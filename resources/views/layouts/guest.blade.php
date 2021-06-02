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

    <script type="module" src="https://unpkg.com/ionicons@5.0.0/dist/ionicons/ionicons.esm.js"></script>
    <script nomodule="" src="https://unpkg.com/ionicons@5.0.0/dist/ionicons/ionicons.js"></script>
</head>
<body>
@yield('content')

@yield('scripts')
<script src="https://www.google.com/recaptcha/api.js?render={{ config('services.google.recaptcha_key') }}"></script>
<script>
  grecaptcha.ready(function () {
    grecaptcha.execute('{{ config('services.google.recaptcha_key') }}', {action: 'contact'}).then(function (token) {
      let recaptchaResponse = document.getElementById('recaptcha')
      recaptchaResponse ? recaptchaResponse.value = token : null
    })
  })
</script>
</body>
</html>
