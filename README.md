# vps-reboot-trigger
Tool to easy restart a VPS using a telegram bot command or a webhook.

### Start the listener with custom params
```
docker run \
    -d \
    -p 3000:3000 \
    --restart=always \
    --name my-vps-reboot-trigger \
    madesk/vps-reboot-trigger \
        --telegram-bot-token TELEGRAM_BOT_TOKEN \
        --telegram-admin-chat TELEGRAM_ADMIN_CHAT \
        --vps-link OVH_VPS_LINK \
        --vps-app-key OVH_VPS_APP_KEY \
        --vps-app-secret OVH_VPS_APP_SECRET \
        --vps-consumer-key OVH_VPS_CONSUMER_KEY \
        --webhook-auth-key WEBHOOK_AUTH_ALPHANUMERIC_KEY
```
