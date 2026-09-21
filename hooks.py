from datetime import datetime

def on_config(config, **kwargs):
    """
    Hook that sets the footer: the copyright up to the current year, and links
    to the privacy policy and terms of use that cover this site.
    """
    current_year = datetime.now().year
    config['copyright'] = (
        f'Copyright &copy; 2024-{current_year} White Ravens 2.0 · '
        '<a href="https://whiteravens.net/privacy/">Privacy policy</a> · '
        '<a href="https://whiteravens.net/terms/">Terms of use</a>'
    )
    return config
