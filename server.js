const express = require('express');
const app = express();

app.use(express.static('public')); // Servir les fichiers HTML dans un dossier 'public'

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
