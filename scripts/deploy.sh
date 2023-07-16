#!/bin/sh

yarn build
rsync -r build viking:/home/vikingofvalhalla
ssh viking ' 
rm -R /var/www/computeTechnology/task_list
mv build task_list
mv task_list /var/www/computeTechnology/
find -P /var/www/computeTechnology/ -xdev -type d -exec chown 'vikingofvalhalla:www-data' {} \; -exec chmod 755 {} \; -ls
find -P /var/www/computeTechnology/ -xdev -type f -exec chown 'vikingofvalhalla:www-data' {} \; -exec chmod 644 {} \;
'
