# Cryptocurrency Dashboard

This is a simple cryptocurrency dashboard that allows users to view the latest prices of popular cryptocurrencies like Bitcoin, Ethereum, Dogecoin, and Solana. The app fetches real-time data from a cryptocurrency API and displays the prices for each coin. The project also includes a responsive design suitable for both web and mobile platforms.

## Features

- Real-time cryptocurrency prices for Bitcoin, Ethereum, Dogecoin, and Solana.
- Responsive layout for mobile and desktop views.
- Interactive and modern user interface.
- Easy navigation to different sections like Market, Features, White Papers, and About Us.

## Technologies Used

- **HTML**: For the structure of the website.
- **CSS**: For styling the layout.
- **JavaScript (jQuery)**: For making asynchronous requests and handling dynamic updates.
- **Cryptocurrency API**: For fetching real-time prices.

## Getting Started

1. **Clone this repository** to your local machine:
    ```bash
    git clone https://github.com/yourusername/cryptocurrency-dashboard.git
    ```

2. **API Integration**: The project currently uses a cryptocurrency API to fetch real-time coin prices. You will need to use your own API or integrate the [CryptoCompare API](https://min-api.cryptocompare.com) or any other cryptocurrency price API.

    - Replace the `apiUrl` in `script.js` with your chosen API endpoint.

3. **Opening the Project**:
    - Open the `index.html` file in your browser to run the app.

## File Structure

- `index.html`: The main HTML file for the structure of the dashboard.
- `style.css`: The CSS file for styling the website.
- `script.js`: The JavaScript file that fetches real-time data and updates the coin prices.
- `images/`: Folder containing images for the cryptocurrency icons (Bitcoin, Ethereum, Dogecoin, Solana).

## Usage

1. Open the app in your browser by opening `index.html`.
2. The dashboard will display the current prices of Bitcoin, Ethereum, Dogecoin, and Solana in real time.
3. The navigation bar allows users to visit different sections of the website (Market, Features, White Papers, About Us).
4. The "EXPLORE MORE" button leads to further content.

## Error Handling

- If there is an issue fetching the data from the API or the API is down, the app will not display the cryptocurrency prices. Ensure the API URL is correct and functional.

## Contributing

Feel free to fork this repository, submit issues, and contribute to the project!

## License

This project is open source and available under the [MIT License](LICENSE).
