<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">

        <title>Lontara</title>

        <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    </head>
    <body>
        <div id="app">
            <navbars></navbars>
            <div class="px-2 sm:px-6 lg:px-8">
                @yield('contents')
            </div>
        </div>
        <script src="{{ asset('js/entry-client.js') }}"></script>
    </body>
</html>
