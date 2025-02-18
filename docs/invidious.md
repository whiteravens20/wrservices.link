---
tags:
  - invidious
  - youtube
  - self-hosted
  - prywatnosc
---

# White Ravens Invidious

White Ravens Invidious to usługa oparta na projekcie Invidious – otwartoźródłowym, alternatywnym interfejsie do przeglądania serwisu YouTube. Dzięki niemu możesz oglądać filmy z YouTube bez bezpośredniego kontaktu z infrastrukturą Google, co przekłada się na większą prywatność oraz brak śledzenia Twoich aktywności.

!!! tip
    [White Ravens Invidious](https://invid.wrservices.link/)

## Co to jest Invidious?

Invidious to projekt, którego główne założenia to:

- **Prywatność:**  
  Oglądanie filmów odbywa się bez konieczności logowania do konta Google, a dane użytkowników nie są zbierane ani śledzone.

- **Alternatywny interfejs:**  
  Invidious umożliwia dostęp do filmów i kanałów z YouTube w lekkim i przejrzystym interfejsie.

- **Brak reklam:**  
  Korzystanie z Invidious {==eliminuje wyświetlanie reklam==}, co zapewnia komfortowe doświadczenie podczas przeglądania.
  
- **Możliwość subskrypcji:**  
  Użytkownicy mogą tworzyć listy subskrypcji, dzięki czemu ulubione kanały są łatwo dostępne.

## Korzystanie z interfejsu Invidious

- **Przeglądanie:**  
  Po wejściu na stronę White Ravens Invidious możesz korzystać z wyszukiwarki, przeglądać proponowane filmy oraz kategorie.
- **Oglądanie:**  
  Interfejs umożliwia bezpośredni podgląd filmu wbudowany w stronę, z dodatkowymi opcjami regulacji jakości i ustawień odtwarzania.
- **Subskrypcje:**  
  Aby móc dodawać i zarządzać subskrypcjami, zaleca się rejestrację konta na naszej instancji. Choć przeglądanie filmów nie wymaga logowania, rejestracja umożliwia zapisywanie ulubionych kanałów i ustawień.

## Rejestracja w Invidious

- **Rejestracja (opcjonalna):**  
  Jeśli Twoja instancja White Ravens Invidious oferuje możliwość rejestracji, znajdziesz opcję "Zarejestruj się" lub "Utwórz konto" w menu. Założenie konta pozwoli Ci na:
  - Dodawanie subskrypcji,
  - Tworzenie własnych list ulubionych,
  - Personalizację ustawień interfejsu.

## Poradnik: Jak dodać subskrypcje z YouTube do instancji Invidious

Aby przenieść swoje subskrypcje z YouTube do White Ravens Invidious, postępuj według poniższych kroków:

### Krok 1: Eksport subskrypcji z YouTube

1. **Korzystając z Google Takeout:**  
   - Zaloguj się na swoje konto Google i przejdź do [Google Takeout](https://takeout.google.com/takeout/custom/youtube).
   - Wybierz do eksportu dane związane z YouTube, w tym listę subskrypcji (zaznacz odpowiednie opcje, jeśli dostępne).
   - Wygeneruj archiwum i pobierz plik zawierający Twoje subskrypcje.
   
   *Alternatywnie:* Możesz skorzystać z dedykowanych narzędzi lub skryptów dostępnych online, które pozwalają wyeksportować listę subskrypcji z YouTube do formatu kompatybilnego z OPML.

### Krok 2: Konwersja do formatu OPML

- **Sprawdzenie formatu:**  
  W niektórych przypadkach pobrany plik może wymagać konwersji do formatu OPML – popularnego standardu wymiany list subskrypcji.  
- **Narzędzia online:**  
  Skorzystaj z dostępnych narzędzi online do konwersji (np. konwerterów CSV/JSON do OPML), aby przygotować plik do importu.

!!! success "Format danych"
    Obecnie YouTube eksportuje dane w formacie **CSV**, jednocześnie instancje Invidious akceptują ten format. W tym przypadku żadna konwersja nie jest wymagana. 

### Krok 3: Import subskrypcji do Invidious

1. **Zaloguj się:**  
   Upewnij się, że jesteś zalogowany na swojej instancji White Ravens Invidious.
2. **Przejdź do sekcji subskrypcji:**  
   W menu nawigacyjnym znajdź opcję dotyczącą subskrypcji lub ustawień konta, gdzie dostępna jest funkcja importu (`Preferencje danych`).
3. **Wybierz opcję importu:**  
   Kliknij przycisk `Import/Export danych` lub podobną opcję.
4. **Wgraj plik OPML:**  
   Wybierz wcześniej przygotowany plik OPML/CSV i rozpocznij import.
5. **Zatwierdź operację:**  
   Po zakończeniu importu Twoje kanały z YouTube powinny pojawić się w liście subskrypcji na Twoim koncie Invidious.

!!! info "Pozostałe dane"
    Możesz zaimportować także pozostałe dane z YouTube, takie jak playlisty czy historia oglądania. Przejrzyj archiwum wyeksportowane z YouTube w poszukiwaniu odpowiednich list i plików. 

### Krok 4: Weryfikacja i zarządzanie subskrypcjami

- **Sprawdź listę:**  
  Po udanym imporcie przejdź do listy subskrypcji, aby upewnić się, że wszystkie kanały zostały poprawnie dodane.
- **Edytuj ustawienia:**  
  W razie potrzeby możesz usuwać niechciane kanały lub zmieniać ustawienia wyświetlania subskrypcji.

---

White Ravens Invidious, bazujący na projekcie Invidious, oferuje bezpieczną i przyjazną dla prywatności alternatywę do tradycyjnego YouTube. Dzięki możliwości importu subskrypcji, możesz przenieść swoje ulubione kanały i korzystać z nich w nowym, minimalistycznym środowisku.
