# Installing PM2 Globally

The command `npm install -g pm2` is used to globally install the **PM2** process manager using npm. Below is a detailed explanation:

## Breakdown of the Command

- **`npm install`**  
  Installs a package using npm.

- **`-g`**  
  Installs the package globally, making it accessible system-wide. This allows you to run the `pm2` command from any directory.

- **`pm2`**  
  PM2 is a process manager for Node.js applications. It simplifies application deployment and management in production environments.

## Features of PM2

- **Daemonized Processes**  
  Runs applications as background services.

- **Automatic Restarts**  
  Automatically restarts applications after crashes.

- **Load Balancing**  
  Utilizes all CPU cores to improve performance.

- **Logging and Monitoring**  
  Provides logs and tools to monitor your application’s performance.

## Usage Examples

1. **Start an Application**  
   ```bash
   pm2 start app.js
### View Running Applications
   pm2 list
### Restart Applications Automatically on System Reboot
   pm2 startup


