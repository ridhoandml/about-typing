export function useKeyboardListener() {
  window.addEventListener("keypress", (event) => {
    const { code } = event;
    console.log("Success", code);
    const element = document.querySelector(`#${code}`);
    // element?.classList.remove("bg-midnight-main");
    // element?.classList.toggle("bg-sea-main");
    // element?.classList.toggle("bg-sea-main");
    // element?.classList.toggle("bg-midnight-light");
  });

  // window.addEventListener("keyup", ())
}
