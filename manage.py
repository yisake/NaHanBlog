#!/usr/bin/env python
import os
import webbrowser
from nahan import create_app, db
from flask_script import Manager
from flask_migrate import Migrate, MigrateCommand
from flask_babel import Babel

app = create_app(os.getenv('FLASK_CONFIG') or 'default')
manager = Manager(app)
migrate = Migrate(app, db)
babel = Babel(app)

manager.add_command('db', MigrateCommand)

if __name__ == '__main__':
    #webbrowser.open_new('http://127.0.0.1:5000')
    manager.run()
    
'''
usage: manage.py runserver [-?] [-h HOST] [-p PORT] [--threaded]
                           [--processes PROCESSES] [--passthrough-errors] [-d]
                           [-D] [-r] [-R]
manage.py runserver: error: argument -h/--host: expected one argument
'''
