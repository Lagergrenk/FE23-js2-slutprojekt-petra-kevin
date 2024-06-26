
import Navigo from 'navigo';

// Kevin's code4
// Only for Date.now() values. example: 1647840000000
// Returns date as example = "21/03/2024" and time as example "12:00:00"
export function formatTimestamp(timestamp: number): {
  date: string;
  time: string;
} {
  const dateAndTime: Date = new Date(timestamp);
  const date: string = dateAndTime.toLocaleDateString('en-GB');
  const time: string = dateAndTime.toLocaleTimeString('en-GB');
  return {
    date,
    time,
  };
}

// Kevin's code
export function attachLinkEvents(links: HTMLAnchorElement, router: Navigo) {
  links.addEventListener('click', (event) => {
    event.preventDefault();
    const href = links.getAttribute('href');
    if (href) {
      router.navigate(href);
    }
  });
}

// Kevin's code
export function toggleContainer(isOn: boolean, container: string): void {
  const credContainer = document.querySelector(container) as HTMLElement;
  isOn
    ? (credContainer.style.display = 'block')
    : (credContainer.style.display = 'none');
}

// Kevin's code
// Shows a toast message for a set duration default is 3 seconds
export function showToast(message: string, duration: number = 3000): void {
  const toastContainer: HTMLElement =
    document.querySelector('#toastContainer') || createToastContainer();
  const existingToast: HTMLCollection =
    toastContainer.getElementsByClassName('toastMessage');

  if (existingToast.length >= 3) {
    existingToast[0].parentNode?.removeChild(existingToast[0]);
  }

  const toast: HTMLDivElement = document.createElement('div');
  toast.classList.add('toastMessage');
  toast.innerText = message;
  toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    setTimeout(() => {
      toast.parentNode?.removeChild(toast);
    }, 500);
  }, duration);
}

// Kevin's code
function createToastContainer(): HTMLElement {
  const toastContainer = document.createElement('div');
  toastContainer.id = 'toastContainer';
  document.body.appendChild(toastContainer);
  return toastContainer;
}

// Kevin's code
export const emptyContainer = (container: string | string[]) => {
  const elements = typeof container === 'string' ? [container] : container;
  elements.forEach((element) => {
    const container = document.querySelector(element);
    if (container) container.innerHTML = '';
  });
};

//Kevin's code
export function highlightSelectedImage(
  radioSelector: string,
  labelSelector: string
): void {
  document
    .querySelectorAll<HTMLInputElement>(radioSelector)
    .forEach((radio) => {
      radio.addEventListener('change', function () {
        document.querySelectorAll(labelSelector).forEach((label) => {
          label.classList.remove('active');
        });
        const parentLabel = this.parentElement;
        if (
          parentLabel &&
          parentLabel.classList.contains(labelSelector.replace('.', ''))
        ) {
          parentLabel.classList.add('active');
        }
      });
    });
}


// Kevin's code
export function generateUniqeId(): number {
  var id = Math.floor(Math.random() * 10000000);
  return id;
}

// Kevin's code
export function firstLetterToUpperCase(word: string): string  {
  return word.charAt(0).toUpperCase() + word.slice(1);
}