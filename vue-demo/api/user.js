
export async function getSystemInfo(){
    const res = await fetch('http://127.0.0.1:8000/system/info')
    if (!res.ok) {
        throw new Error('Failed to fetch system info')
    }
    return res.json()

}


sudo apt remove microsoft-edge-stable
sudo apt purge microsoft-edge-stable
sudo apt autoremove
