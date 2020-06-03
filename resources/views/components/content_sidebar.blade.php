<div class="card mb-3">
    <div class="card-body">
        <div class="nav nav-pills flex-column">
            @isset($links)
                @foreach($links as $link)
                    <a href="{{ $link['to'] }}"
                       class="nav-link{{ Request::is(trim($link['to'], '/')) ? ' active' : '' }}">
                        {{ $link['label'] }}
                    </a>
                @endforeach
            @endisset
        </div>
    </div>
</div>
