---
tags:
  - github
  - bugi
  - pomoc
---

# Jak zgłaszać błędy na GitHub - Pełny Tutorial

Repozytoria projektów **White Ravens** są przechowywane na GitHub, gdzie społeczność ma możliwość zgłaszania błędów oraz sugestii dotyczących projektów. W przypadku pytań lub problemów, błędy można również zgłaszać na naszym serwerze *Discord*, gdzie otrzymasz wsparcie od członków społeczności i deweloperów.

!!! tip "Repozytoria projektów White Ravens"
    [GitHub White Ravens](https://github.com/orgs/whiteravens20/repositories)

W tym przewodniku znajdziesz krok po kroku, jak zgłaszać błędy (issues) na GitHub, aby skutecznie pomóc deweloperom w identyfikacji i naprawie problemów.

## 1. Rejestracja i logowanie

- **Załóż konto na GitHub:**  
  Jeśli nie masz jeszcze konta, przejdź na [GitHub](https://github.com/) i kliknij "Sign up". Wypełnij wymagane informacje, potwierdź rejestrację i aktywuj konto.
  
- **Zaloguj się:**  
  Po utworzeniu konta zaloguj się, używając swoich danych logowania.

## 2. Znalezienie odpowiedniego repozytorium

- **Przejdź do repozytorium:**  
  Wyszukaj repozytorium projektu, w którym chcesz zgłosić błąd, korzystając z wyszukiwarki GitHub lub bezpośrednio wpisując adres URL repozytorium.
  
- **Upewnij się, że błąd dotyczy tego projektu:**  
  Przed zgłoszeniem sprawdź, czy zgłaszany problem faktycznie dotyczy danego projektu.

!!! info
    Nie każda usługa White Ravens posiada własne repozytorium – niektóre z nich to self-hostowane aplikacje rozwijane w modelu open source. W takim przypadku należy odnieść się do odpowiedniego repozytorium danego projektu. Jeśli nie masz pewności, gdzie zgłosić błąd, zapytaj na *Discord* lub otwórz issue w naszym repozytorium: [whiteravens20/wrservices.link](https://github.com/whiteravens20/wrservices.link). Błędy związane z usługami White Ravens powinny być zgłaszane właśnie w tym repozytorium.

## 3. Sprawdzenie istniejących zgłoszeń

- **Przeglądaj zakładkę Issues:**  
  Kliknij zakładkę **Issues** w repozytorium, aby zobaczyć, czy ktoś już zgłosił podobny błąd.
  
- **Wyszukiwanie:**  
  Użyj wyszukiwarki w zakładce Issues, aby znaleźć podobne zgłoszenia. Jeśli zgłoszenie już istnieje, możesz dodać komentarz lub obserwować dyskusję.

## 4. Utworzenie nowego zgłoszenia (Issue)

### Krok 4.1: Rozpocznij zgłoszenie

- Kliknij przycisk **New Issue**, który zazwyczaj znajduje się w górnej części zakładki Issues.

### Krok 4.2: Wypełnij formularz zgłoszenia

- **Tytuł zgłoszenia:**  
  Wprowadź krótki, ale precyzyjny tytuł opisujący problem (np. "Błąd przy zapisywaniu ustawień użytkownika").

!!! success
    Możesz skopiować poniższy kod i wkleić go przy zgłaszaniu błędu. GitHub automatycznie sformatuje go za pomocą [Markdown](https://pl.wikipedia.org/wiki/Markdown). Nie zapomnij uzupełnić odpowiednich treści.

``` title="Treść zgłoszenia"
- **Opis błędu:**  
  W treści zgłoszenia postaraj się zamieścić następujące informacje:
  - **Kroki do reprodukcji błędu:**  
    Opisz krok po kroku, jak odtworzyć problem.
  - **Oczekiwane zachowanie:**  
    Wyjaśnij, co powinno się wydarzyć, gdy system działa poprawnie.
  - **Rzeczywiste zachowanie:**  
    Opisz, co się dzieje w rzeczywistości.
  - **Środowisko:**  
    Podaj informacje o środowisku, takie jak:
    - System operacyjny (np. Windows, macOS, Linux)
    - Wersja przeglądarki lub aplikacji
    - Wersja oprogramowania projektu
  - **Dodatkowe informacje:**  
    Załącz zrzuty ekranu, logi błędów, linki lub inne materiały, które mogą pomóc w diagnozie problemu.
```

### Krok 4.3: Dodawanie etykiet i przypisywanie

- **Etykiety (Labels):**  
  Jeśli repozytorium korzysta z etykiet, wybierz odpowiednie tagi (np. `bug`, `high priority`, `needs investigation`).
  
- **Przypisywanie (Assignees):**  
  Jeśli masz możliwość przypisania zgłoszenia do konkretnego dewelopera lub zespołu, wykonaj tę czynność zgodnie z zaleceniami projektu.

### Krok 4.4: Przegląd i wysłanie zgłoszenia

- **Sprawdź zgłoszenie:**  
  Upewnij się, że wszystkie niezbędne informacje zostały podane.
  
- **Wyślij zgłoszenie:**  
  Kliknij przycisk **Submit new issue**, aby opublikować zgłoszenie.

## 5. Monitorowanie zgłoszenia

- **Obserwowanie zgłoszenia:**  
  Po wysłaniu zgłoszenia możesz "obserwować" dany issue, aby otrzymywać powiadomienia o komentarzach i zmianach statusu.
  
- **Odpowiadaj na pytania:**  
  Jeśli deweloperzy lub inni użytkownicy będą mieli pytania dotyczące zgłoszenia, odpowiadaj na nie, dostarczając dodatkowych informacji.

## Wskazówki dodatkowe

- **Precyzyjność:**  
  Im bardziej szczegółowy opis błędu, tym łatwiej deweloperom zrozumieć problem i wprowadzić poprawki.
  
- **Uprzejmość:**  
  Pamiętaj, że zgłoszenie błędu to forma pomocy społeczności. Staraj się być rzeczowy i uprzejmy w swoich opisach.
  
- **Aktualizacje:**  
  Jeśli w międzyczasie pojawią się nowe informacje lub uda Ci się odtworzyć problem w inny sposób, edytuj zgłoszenie lub dodaj komentarz, aby deweloperzy mieli aktualne dane.

---

Postępując według powyższych kroków, skutecznie zgłosisz błąd na GitHub, co przyczyni się do szybszej identyfikacji i naprawy problemów w projekcie. Twoje zgłoszenia pomagają rozwijać oprogramowanie oraz budować silniejszą społeczność open source.