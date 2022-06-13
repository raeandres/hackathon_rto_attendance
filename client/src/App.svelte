<script>
    import './App.css';
    import fingerprint from '@fingerprintjs/fingerprintjs';
    import moment from 'moment';
    import Usage from './lib/Usage.svelte';

    let lastCheckInDate = localStorage.getItem('LAST_CHECKIN_DATE') ?? null;
    let userFingerprint = JSON.parse(localStorage.getItem('FINGERPRINT')) ?? null;
    let isCheckedIn = lastCheckInDate === moment().format('MM/DD/YYYY');

    let date = moment().format('ddd MM/DD/YYYY');
    let clock = moment().format('HH:mm:ss A');

    let payload = {
        email: userFingerprint?.email ?? '',
        uuid: userFingerprint?.uuid ?? '',
    };

    let result;
    let submitting = false;

    async function checkIn() {
        const url = import.meta.env.DEV ? `${import.meta.env.VITE_API_URL}/checkin` : '/api/checkin';
        payload.uuid = await getFingerprint();
        submitting = true;

        const res = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        });

        if (res.status === 200) {
            userFingerprint = payload;
            localStorage.setItem('LAST_CHECKIN_DATE', moment().format('MM/DD/YYYY'));
            localStorage.setItem('FINGERPRINT', JSON.stringify(userFingerprint));
            isCheckedIn = true;
        }

        submitting = false;
        result = await res.json();
    }

    function getFingerprint() {
        return fingerprint
            .load()
            .then(res => res.get())
            .then(res => res.visitorId);
    }

    $: {
        setInterval(() => {
            clock = moment().format('HH:mm:ss A');
        }, 1000);
    }
</script>

<Usage />
<nav class="navbar bg-neutral p-0 m-0">
    <a href="/"
        ><img class="h-[64px]" src="/images/manulife-logo-only.svg" alt="manulife-logo-only" />
        <img class="h-[24px] ml-5" src="/images/manulife-text-only.svg" alt="manulife-text-only" />
    </a>
</nav>
<main class="max-w-md mx-auto w-full p-6 py-32">
    {#if !isCheckedIn}
        <div class="flex flex-col">
            <div class="flex flex-col gap-2 items-center mb-16">
                <h1 class="text-5xl font-bold">{clock}</h1>
                <h3 class="text-lg font-semibold">{date}</h3>
            </div>
            {#if !userFingerprint}
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
            {:else}
                <h2 class="text-center text-primary">Username: {payload.email}</h2>
            {/if}

            <button on:click={checkIn} class="btn btn-lg btn-secondary w-full mt-4" class:loading={submitting}>
                Check-In
            </button>
        </div>
    {:else}
        <div class="flex flex-col gap-4 items-center">
            <img src="/images/undraw_confirmed.svg" alt="confirmed" />
            <div class="text-center">
                <h1 class="text-xl font-bold text-primary">Success!</h1>
                <h3 class="text-lg text-primary">You have already checked-in for today.</h3>
            </div>
        </div>
    {/if}
</main>
