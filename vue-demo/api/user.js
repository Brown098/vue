export async function getSystemInfo(){
    const res = await fetch('http://127.0.0.1:8000/system/info')
    if (!res.ok) {
        throw new Error('Failed to fetch system info')
    }
    return res.json()
}

// 获取CPU信息
export async function getCpuInfo(){
    const res = await fetch('http://127.0.0.1:8000/cpu/info')
    if (!res.ok) {
        throw new Error('Failed to fetch CPU info')
    }
    return res.json()
}

<<<<<<< HEAD
<<<<<<< HEAD
sudo apt remove microsoft-edge-stable
sudo apt purge microsoft-edge-stable
sudo apt autoremove
=======
>>>>>>> 67955f9 (main)
=======
// 获取内存信息
export async function getMemoryInfo(){
    const res = await fetch('http://127.0.0.1:8000/memory/info')
    if (!res.ok) {
        throw new Error('Failed to fetch memory info')
    }
    return res.json()
}

// 获取磁盘信息
export async function getDiskInfo(){
    const res = await fetch('http://127.0.0.1:8000/disk/info')
    if (!res.ok) {
        throw new Error('Failed to fetch disk info')
    }
    return res.json()
}

// 获取网络信息
export async function getNetworkInfo(){
    const res = await fetch('http://127.0.0.1:8000/network/info')
    if (!res.ok) {
        throw new Error('Failed to fetch network info')
    }
    return res.json()
}

// 获取进程信息
export async function getProcesses(){
    const res = await fetch('http://127.0.0.1:8000/processes')
    if (!res.ok) {
        throw new Error('Failed to fetch processes info')
    }
    return res.json()
}

// 获取系统状态
export async function getSystemStatus(){
    const res = await fetch('http://127.0.0.1:8000/system/status')
    if (!res.ok) {
        throw new Error('Failed to fetch system status')
    }
    return res.json()
}
>>>>>>> b248ad6 (main)
