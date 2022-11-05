

process.on('uncaughtException', (err) => {
    console.log(err.name, err.message);
    console.log('Uncaught Exception! Application is shutting down!');
    process.exit(1);
  });


const app = require('./app');
const PORT = process.env.PORT || 3000;;

app.listen(PORT, () => {
  console.log(` App is running at port: ${PORT}`);
});