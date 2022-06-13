<script>
    export let code;

    let messages = {
        LOCATION_ACCESS_DENIED: {
            image: '/images/undraw_error_location.svg',
            title: 'Location Access Denied!',
            message: 'Please allow location access for this application in order to proceed.',
        },
    };
</script>

<div class="flex flex-col gap-4 items-center">
    <img src={messages[code]?.image} alt={code} />
    <div class="text-center">
        <h1 class="text-xl font-bold text-error">{messages[code]?.title}</h1>
        <h3 class="text-lg">{messages[code]?.message}</h3>
    </div>
</div>
