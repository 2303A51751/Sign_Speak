# SignSpeak

SignSpeak is an interactive web platform designed to help users learn American Sign Language (ASL) with confidence. It empowers both beginners and those familiar with ASL by providing comprehensive learning modules, an interactive quiz, and an intelligent text-to-sign translator.

## 🚀 Features

- **ASL Alphabet:** Learn all 26 letters of the ASL alphabet with detailed images and hand position descriptions.
- **Common Phrases:** Master essential everyday phrases, such as greetings, emotions, and emergency signs, organized by useful categories.
- **Text-to-Sign Translator:** Instantly convert any English text into ASL visuals. It intelligently recognizes multi-word phrases (e.g., "Thank You") and seamlessly translates the rest letter-by-letter.
- **Interactive Quiz:** Test your knowledge with an interactive multiple-choice quiz that offers mixed difficulties, tracking your score and providing immediate visual feedback.
- **Accessible Design:** Developed with robust, accessible UI components ensuring an optimal learning experience on desktops and mobile devices alike.

## 🛠️ Tech Stack

- **Framework:** Next.js (App Router)
- **Library:** React
- **Styling:** Tailwind CSS
- **Components:** shadcn/ui
- **Icons:** Lucide React

## 📦 Getting Started

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/2303A51751/Sign_Speak.git
   ```
2. Navigate to the project directory:
   ```bash
   cd Sign_Speak
   ```
3. Install dependencies:
   ```bash
   npm install
   # or
   pnpm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   # or
   pnpm dev
   ```
5. Open your browser and visit `http://localhost:3000` to interact with SignSpeak!

## 📂 Project Structure

- `app/`: Next.js App Router pages and application configurations.
- `components/`: Modular React components, including standard layout views and shadcn UI modules.
- `lib/`: Core logic and raw ASL data (`asl-data.ts`) containing letters and phrases.
- `public/`: Static assets such as images for ASL signs and hand visuals.

## 🤝 Contributing

Contributions, issues, and feature requests are always welcome! Feel free to check the [issues page](https://github.com/2303A51751/Sign_Speak/issues) if you want to contribute.

## 📝 License

This project is open-source and free to use.
