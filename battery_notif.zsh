while :                                                                                                    130 ↵
do
        POWER=$(acpi -b | grep "Battery 0" | grep -o '[0-9]\+%' | tr -d '%')
        if [[ $POWER -le 30 ]]; then
                notify-send "Battery power is lower than 15%"
        fi
sleep 30
done

