MITRE_MAP = {
    "brute force": "T1110 - Brute Force",
    "login failed": "T1110 - Brute Force",
    "wget": "T1105 - Ingress Tool Transfer",
    "curl": "T1105 - Ingress Tool Transfer",
    "nc ": "T1041 - Exfiltration Over C2 Channel",
    "reverse shell": "T1059 - Command and Scripting Interpreter",
    "ssh attempt": "T1021 - Remote Services",
    "powershell": "T1059.001 - PowerShell",
    "chmod +x": "T1059 - Execution",
    "cmd.exe": "T1059.003 - Windows Command Shell",
    "lsass": "T1003 - Credential Dumping",
    "rundll32": "T1218 - Signed Binary Proxy Execution"
}

def map_to_mitre(action: str) -> str:
    action = action.lower()
    for keyword, mitre_tag in MITRE_MAP.items():
        if keyword in action:
            return mitre_tag
    return "Unknown"