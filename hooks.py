from datetime import datetime

def on_config(config, **kwargs):
    """
    Hook that automatically updates the copyright year to current year.
    """
    current_year = datetime.now().year
    config['copyright'] = f'Copyright &copy; 2024-{current_year} White Ravens 2.0'
    return config
