<script>
    import './App.css';
    import fingerprint from '@fingerprintjs/fingerprintjs';
    import moment from 'moment';

    let date = moment().format('ddd MM/DD/y');
    let clock = moment().format('HH:mm:ss');
    let payload = {
        email: '',
        uuid: '',
    };
    let submitting = false;
    let result;

    let uuid = fingerprint
        .load()
        .then(res => res.get())
        .then(res => res.visitorId);

    async function checkIn() {
        const url = import.meta.env.DEV ? `${import.meta.env.VITE_API_URL}/checkin` : '/api/checkin';
        console.log(url);
        payload.uuid = await uuid;
        submitting = true;

        const res = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        });

        submitting = false;
        result = await res.json();
    }

    $: {
        setInterval(() => {
            clock = moment().format('HH:mm:ss');
        }, 1000);
    }
</script>

<nav class="navbar bg-neutral p-0 m-0">
    <a href="/"
        ><img class="h-[64px]" src="/images/manulife-logo-only.svg" alt="manulife-logo-only" />
        <img class="h-[24px] ml-5" src="/images/manulife-text-only.svg" alt="manulife-text-only" />
    </a>
</nav>
<main class="max-w-md mx-auto w-full p-6 py-16">
    {#await uuid then value}
        <div class="flex flex-col gap-4">
            <div class="flex flex-col gap-2">
                <h1 class="text-8xl font-bold">{clock}</h1>
                <h3 class="text-lg font-semibold">{date}</h3>
            </div>
            <div class="form-control w-full">
                <label class="label" for="">
                    <span class="label-text">Email (MFCGD)</span>
                </label>
                <input
                    type="text"
                    placeholder="mitdc@mfcgd.com"
                    class="input input-bordered w-full"
                    bind:value={payload.email}
                />
            </div>
            <button on:click={checkIn} class="btn btn-lg btn-secondary w-full" class:loading={submitting}>
                Check-In
            </button>
        </div>
    {/await}
</main>
