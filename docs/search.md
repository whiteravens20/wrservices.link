---
tags:
  - wyszukiwarka
  - self-hosted
  - prywatnosc
---

# White Ravens Search

White Ravens Search to projekt oparty na [searxng](https://github.com/searxng/searxng) – otwartoźródłowym silniku wyszukiwania, który stawia na prywatność użytkowników oraz niezależność w przeszukiwaniu zasobów internetu. Dzięki niemu możesz korzystać z wyników pochodzących z wielu różnych źródeł, bez obaw o śledzenie Twoich działań.

!!! tip "Link"
    [White Ravens SearXNG](https://search.whiteravens.net/)

## Co to jest searxng?

Searxng to nowoczesny, otwartoźródłowy silnik wyszukiwania, który działa jako agregator wyników. Jego główne zalety to:

- **Prywatność:**  
  Searxng nie zbiera danych o użytkownikach ani nie śledzi historii wyszukiwania.
  
- **Agregacja wyników:**  
  Zapytania wysyłane są do wielu wyszukiwarek jednocześnie, co pozwala na uzyskanie obiektywnych i zróżnicowanych wyników.
  
- **Konfigurowalność:**  
  Użytkownicy mogą dostosować źródła, z których pobierane są informacje, aby otrzymywać wyniki najbardziej odpowiadające ich potrzebom.

## Jak działa searxng?

1. **Przyjmowanie zapytań:**  
   Użytkownik wpisuje zapytanie w polu wyszukiwania.
   
2. **Agregacja wyników:**  
   Searxng przekazuje zapytanie do wybranych wyszukiwarek oraz baz danych. Następnie zbiera i łączy otrzymane wyniki w jeden, spójny wynik wyszukiwania.
   
3. **Prezentacja wyników:**  
   Wyniki są wyświetlane w przejrzystej formie, umożliwiając łatwe przeglądanie oraz filtrowanie wyników według preferencji użytkownika.

## Jak ustawić searxng jako domyślną wyszukiwarkę?

Poniżej znajdziesz instrukcje, jak skonfigurować searxng jako domyślną wyszukiwarkę w popularnych przeglądarkach internetowych.

### Google Chrome

1. Otwórz przeglądarkę i przejdź do ustawień, wpisując w pasku adresu: `chrome://settings/`
2. Przejdź do sekcji **Wyszukiwarka**.
3. Kliknij **Zarządzaj wyszukiwarkami i witrynami**.
4. W sekcji **Wyszukiwarki** kliknij przycisk **Dodaj**.
5. Wypełnij pola:
   - **Nazwa:** np. "Searxng"
   - **Słowo kluczowe:** np. "sx"
   - **URL z %s zamiast zapytania:**  
     `https://search.whiteravens.net/search?q=%s`
6. Po dodaniu, kliknij przycisk z trzema kropkami obok nowej wyszukiwarki i wybierz **Ustaw jako domyślną**.

### Mozilla Firefox

1. Otwórz przeglądarkę i przejdź do **Ustawień** (menu → Opcje/Preferencje).
2. Przejdź do zakładki **Wyszukiwarka**.
3. Kliknij **Znajdź więcej wyszukiwarek** lub **Dodaj wyszukiwarkę** (w zależności od wersji przeglądarki).
4. Dodaj nowy silnik, wpisując URL wyszukiwania:
   `https://search.whiteravens.net/search?q=%s`
5. Po dodaniu, wybierz searxng jako domyślną wyszukiwarkę.

### Microsoft Edge

1. Otwórz Edge i wejdź w ustawienia, wpisując: `edge://settings/`
2. Przejdź do sekcji **Prywatność, wyszukiwanie i usługi**.
3. Znajdź opcję **Adres paska adresu i wyszukiwanie**.
4. Kliknij **Zarządzaj wyszukiwarkami**.
5. Dodaj nową wyszukiwarkę, podając:
   - **Nazwa:** np. "Searxng"
   - **Słowo kluczowe:** np. "sx"
   - **URL wyszukiwania:**  
     `https://search.whiteravens.net/search?q=%s`
6. Ustaw nowo dodaną wyszukiwarkę jako domyślną.

---

White Ravens Search, oparty na searxng, to niezależne i przyjazne dla prywatności narzędzie wyszukiwania, które daje pełną kontrolę nad wynikami. Dzięki łatwej konfiguracji w popularnych przeglądarkach, możesz cieszyć się spersonalizowanym wyszukiwaniem na co dzień.
