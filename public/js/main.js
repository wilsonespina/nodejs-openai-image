function onSubmit(e) {
  e.preventDefault();

  document.querySelector('.msg').textContent = '';
  document.querySelector('#image').src = '';

  const prompt = document.querySelector('#prompt').value;
  const size = document.querySelector('#size').value;

  if (prompt === '') {
    alert('Please add some text');
    return;
  }

  generateImageRequest(prompt, size);
}

async function generateImageRequest(prompt, size) {
  try {
    showSpinner();

    const response = await fetch('/openai/generateimage', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        prompt,
        size,
      }),
    });
    console.log("🚀 ~ file: main.js:32 ~ generateImageRequest ~ response:", response)

    if (!response.ok) {
      removeSpinner();
      const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
      console.log("🚀 ~ file: main.js:37 ~ generateImageRequest ~ process.env:", process.env)
      console.log("🚀 ~ file: main.js:37 ~ generateImageRequest ~ OPENAI_API_KEY:", OPENAI_API_KEY)
      throw new Error('That image could not be generated');
    }

    const data = await response.json();
    console.log(data);

    const imageUrl = data.data;

    document.querySelector('#image').src = imageUrl;

    removeSpinner();
  } catch (error) {
    document.querySelector('.msg').textContent = error;
  }
}

function showSpinner() {
  document.querySelector('.spinner').classList.add('show');
}

function removeSpinner() {
  document.querySelector('.spinner').classList.remove('show');
}

document.querySelector('#image-form').addEventListener('submit', onSubmit);
