const express = require('express');
const app = express();

app.use(express.json());

app.post('/bfhl', (req, res) => {
    const { data } = req.body;

    if (!data || !Array.isArray(data)) {
        return res.status(400).json({ is_success: false, error: "Invalid input" });
    }

    const numbers = data.filter(item => !isNaN(item));
    const alphabets = data.filter(item => /^[A-Za-z]$/.test(item));

    const highestAlphabet = alphabets.length > 0
        ? [alphabets.sort((a, b) => b.localeCompare(a))[0]]
        : [];

    res.json({
        is_success: true,
        user_id: "your_name_ddmmyyyy",  // Replace with actual format
        email: "your_email@example.com",  // Replace with actual email
        roll_number: "YourRollNumber",  // Replace with actual roll number
        numbers: numbers,
        alphabets: alphabets,
        highest_alphabet: highestAlphabet
    });
});

app.get('/bfhl', (req, res) => {
    res.json({ operation_code: 1 });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
