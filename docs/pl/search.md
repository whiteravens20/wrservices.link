---
tags:
  - search-engine
  - self-hosted
  - privacy
  - searxng
---

# White Ravens Search

White Ravens Search to prywatna wyszukiwarka internetowa oparta na projekcie [SearXNG](https://github.com/searxng/searxng). Działa jak Google czy Bing, ale **nie zbiera żadnych danych** o Tobie — nie śledzi Twoich wyszukiwań, nie wyświetla reklam i nie tworzy profilu reklamowego.

!!! tip "Link"
    [White Ravens SearXNG](https://search.whiteravens.net/)

**Najważniejsze cechy:**

- :material-shield-account: **Pełna prywatność** — brak śledzenia, brak zbierania danych, brak reklam
- :material-magnify: **Wyniki z wielu źródeł** — wyszukiwarka pobiera wyniki z Google, Bing, DuckDuckGo i wielu innych jednocześnie
- :material-cog: **Konfigurowalne** — możesz wybrać, z których wyszukiwarek mają pochodzić wyniki
- :material-account-off: **Bez rejestracji** — korzystaj od razu, bez zakładania konta

---

## Jak korzystać?

1. Wejdź na [White Ravens SearXNG](https://search.whiteravens.net/).
2. Wpisz szukaną frazę w pole wyszukiwania.
3. Przeglądaj wyniki — możesz je filtrować po kategoriach (strony, obrazy, wideo, wiadomości itp.).

!!! info "Czym to się różni od Google?"
    Zwykłe wyszukiwarki zapisują każde Twoje zapytanie i tworzą profil, aby wyświetlać spersonalizowane reklamy. SearXNG nie zapisuje nic — po zamknięciu przeglądarki nie zostaje żaden ślad.

---

## Jak ustawić jako domyślną wyszukiwarkę?

Aby nie musieć ręcznie wchodzić na stronę za każdym razem, możesz ustawić SearXNG jako domyślną wyszukiwarkę w przeglądarce.

=== "Google Chrome"

    1. Wpisz w pasku adresu: `chrome://settings/searchEngines`
    2. Kliknij **Dodaj** w sekcji „Wyszukiwarki".
    3. Wypełnij pola:
        - **Nazwa:** `SearXNG`
        - **Słowo kluczowe:** `sx`
        - **URL:** `https://search.whiteravens.net/search?q=%s`
    4. Kliknij trzy kropki :material-dots-vertical: obok dodanej wyszukiwarki → **Ustaw jako domyślną**.

=== "Mozilla Firefox"

    1. Otwórz **Ustawienia** → zakładka **Wyszukiwarka**.
    2. Kliknij **Znajdź więcej wyszukiwarek** lub **Dodaj wyszukiwarkę**.
    3. Wpisz URL: `https://search.whiteravens.net/search?q=%s`
    4. Wybierz SearXNG jako domyślną wyszukiwarkę.

=== "Microsoft Edge"

    1. Wpisz w pasku adresu: `edge://settings/searchEngines`
    2. Kliknij **Dodaj** i wypełnij:
        - **Nazwa:** `SearXNG`
        - **Słowo kluczowe:** `sx`
        - **URL:** `https://search.whiteravens.net/search?q=%s`
    3. Ustaw jako domyślną wyszukiwarkę.

---

## Najczęściej zadawane pytania

??? question "Czy wyniki są gorsze niż w Google?"
    Nie — SearXNG pobiera wyniki z Google i wielu innych wyszukiwarek jednocześnie, więc często otrzymujesz nawet bardziej zróżnicowane rezultaty.

??? question "Czy muszę się rejestrować?"
    Nie. Wyszukiwarka działa od razu, bez konta i bez logowania.

??? question "Czy moje wyszukiwania są gdzieś zapisywane?"
    Nie. SearXNG nie prowadzi żadnych logów wyszukiwań ani nie przechowuje historii.

??? question "Czy mogę wybrać, z których źródeł pobierane są wyniki?"
    Tak. W ustawieniach wyszukiwarki możesz włączać i wyłączać poszczególne źródła wyników.

---

White Ravens Search to prywatna, wolna od reklam wyszukiwarka, która daje Ci pełną kontrolę nad tym, skąd pochodzą wyniki — bez śledzenia i bez zbierania danych.
