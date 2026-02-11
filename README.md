# 🎮 Game library — a collection of games I have played

A web application for displaying a collection of completed video games with a beautiful and intuitive design.

## Online Preview

The project is available via GitHub Pages:  
🔗 **[View Live Version](https://ipetroiliu.github.io/Game_Library/)**


## 📁 Project Structure
```
Game_Library/
├── 📄 index.html        # Main page
├── 🎨 style.css         # Styles with animations
├── ⚙️ script.js         # Loading and rendering logic
├── 📊 data.json         # Game data
├── 🖼️ images/           # Folder with game covers
└── .github/workflows/
    └── 🤖 squash.yml    # Automatic commit squashing
```

## 📊 Data Format (data.json)
```
{
  "played": [
    {
      "name": "Game Title",
      "image": "images/file-name.jpg",
      "finished": true,
      "rating": 9,
      "love": ["Story", "Graphics", "Gameplay"]
    }
  ]
}
```

## 🔧 Technologies
```
• HTML5 — semantic markup  
• CSS3 — Grid, Flexbox, CSS variables, animations  
• JavaScript (ES6+) — modern syntax  
• GitHub Actions — workflow automation  
• GitHub Pages — hosting
```