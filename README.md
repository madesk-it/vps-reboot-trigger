# vps-reboot-trigger
This is a tool to easy restart a VPS using a telegram bot command.

### Start the listener with custom params
```
docker run \
    -d --restart=always --name my-vps-reboot-trigger \
    madesk/vps-reboot-trigger \
        --telegram-bot-token TELEGRAM_BOT_TOKEN \
        --telegram-admin-chat TELEGRAM_ADMIN_CHAT \
        --vps-link OVH_VPS_LINK \
        --vps-app-key OVH_VPS_APP_KEY \
        --vps-app-secret OVH_VPS_APP_SECRET \
        --vps-consumer-key OVH_VPS_CONSUMER_KEY
```
