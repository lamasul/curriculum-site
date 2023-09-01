import type { Tools } from "$lib/utils/types";

export default [
  {
    name: 'GAN Game',
    description:
      'Learn how generative adversarial networks, a.k.a. GANs, work through this fun mini activity! Where there is a guessing game with two roles as analogies for Generator and Discriminator - the two competing parts of a GAN.',
    image: 'images/tools/GANs.png',
    link: 'https://howganswork.herokuapp.com/',
    tags: []
  },
  {
    name: 'Text Generation Tool',
    description:
      'NOT READY',
    image: 'images/tools/placeholder-image.png',
    link: 'https://github.com/mitmedialab/GenAI-Lab.git',
    tags: []
  },
  {
    name: 'Style Transfer Tool',
    description:
      'Converts images from one style to another using a machine learning model trained on pairs of images.',
    image: 'images/tools/StyleTransfer.jpeg',
    link: 'https://mitmedialab.github.io/GAN-play/',
    tags: []
  },
  {
    name: 'Introduction to ChatGPT Code Notebook',
    description:
      "You've probably heard of ChatGPT. Now you'll get a chance to play with the technology running it behinds the scenes.",
    image: 'images/tools/chatgpt_tool.jpeg',
    link: 'https://colab.research.google.com/github/GabrielleRab/SRMPmachine/blob/main/Intro_to_ML_Code.ipynb',
    tags: []
  },
  {
    name: 'ChatGPT for Education Notebook',
    description:
      "Create a co-writing tool that helps writers with teaching strategies such as collaborative construction and providing feedback.",
    image: 'images/tools/chatgpt_tool_education.webp',
    link: 'https://colab.research.google.com/drive/1h2Qee2Gz_uaCu1sRsOBBN9oZ3WqxUkXx?usp=sharing',
    tags: []
  },
  {
    name: 'VAE Game',
    description:
      "A mini game that will help consolidate the concept of Variational Autoencoders (VAEs).",
    image: 'images/tools/VAE-Game.png',
    link: 'https://play.unity3dusercontent.com/webgl/b9b7cf2d-ef07-4418-b586-6b74d182b35c?screenshot=false&embedType=embed',
    tags: []
  },
  {
    name: 'Contours to Classification Game',
    description:
      "Learn about Neural Networks through this fun and collaborative game!",
    image: 'images/tools/contours-to-classification.png',
    link: 'https://contours2classification.herokuapp.com/',
    tags: []
  }
] as Tools[];