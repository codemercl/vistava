const express = require('express');
const cors = require('cors');
const supabase = require('./db');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Get all shows
app.get('/api/shows', async (req, res) => {
  try {
    const { data, error } = await supabase
      .from('shows')
      .select('*')
      .order('date', { ascending: true });

    if (error) throw error;
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get a single show by ID
app.get('/api/shows/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { data, error } = await supabase
      .from('shows')
      .select('*')
      .eq('id', id)
      .single();

    if (error) throw error;
    if (!data) {
      return res.status(404).json({ error: 'Show not found' });
    }

    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Create a new show
app.post('/api/shows', async (req, res) => {
  try {
    const { location, date, weekday, time, buyLink } = req.body;
    
    const { data, error } = await supabase
      .from('shows')
      .insert([
        {
          location,
          date,
          weekday,
          time,
          buy_link: buyLink
        }
      ])
      .select()
      .single();

    if (error) throw error;
    res.status(201).json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Update a show
app.put('/api/shows/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { location, date, weekday, time, buyLink } = req.body;
    
    const { data, error } = await supabase
      .from('shows')
      .update({
        location,
        date,
        weekday,
        time,
        buy_link: buyLink,
        updated_at: new Date().toISOString()
      })
      .eq('id', id)
      .select()
      .single();

    if (error) throw error;
    if (!data) {
      return res.status(404).json({ error: 'Show not found' });
    }

    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Delete a show
app.delete('/api/shows/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { error } = await supabase
      .from('shows')
      .delete()
      .eq('id', id);

    if (error) throw error;
    res.json({ message: 'Show deleted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Initialize database with sample data
async function initializeDatabase() {
  try {
    // Check if we have any data
    const { count, error: countError } = await supabase
      .from('shows')
      .select('*', { count: 'exact', head: true });

    if (countError) throw countError;

    if (count === 0) {
      // Insert sample data
      const sampleShows = [
        {
          location: 'Культурний кластер "Краків", Русанівська набережна, 12/2',
          date: '2024-06-26',
          weekday: 'четвер',
          time: '18:30',
          buy_link: 'https://secure.wayforpay.com/payment/s20aef53e791e',
        },
        {
          location: 'Центральний будинок Офіцерів, вул. Грушевського, 30/1',
          date: '2024-07-17',
          weekday: 'неділя',
          time: '18:30',
          buy_link: 'https://secure.wayforpay.com/payment/s87166ae1bdd6',
        },
        {
          location: 'Центральний будинок Офіцерів, вул. Грушевського, 30/1',
          date: '2024-08-07',
          weekday: 'четвер',
          time: '19:00',
          buy_link: 'https://secure.wayforpay.com/payment/s8aa87c0f4aa1',
        },
      ];

      const { error: insertError } = await supabase
        .from('shows')
        .insert(sampleShows);

      if (insertError) throw insertError;
      console.log('Sample data inserted successfully');
    }
  } catch (err) {
    console.error('Error initializing database:', err);
  }
}

app.listen(port, async () => {
  console.log(`Server is running on port ${port}`);
  await initializeDatabase();
}); 