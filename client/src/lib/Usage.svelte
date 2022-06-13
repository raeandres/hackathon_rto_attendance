<script>
    let open = true;
</script>

{#if open}
    <div class="modal modal-open">
        <div class="modal-box">
            <h3 class="font-bold text-lg">USAGE & INFORMATION</h3>
            <div class="modal-body py-4">
                <p>The application uses the following to determine and validate your attendance:</p>
                <ul class="list-disc pl-6 mt-2">
                    <li>UUID (Browser Generated ID)</li>
                    <li>Location</li>
                </ul>
                <p class="mt-4">
                    If not necessary, try to <span class="font-bold text-error"
                        >avoid clearing cache and changing browser</span
                    >
                    for this application as there is a small chance that your UUID will be regenerated and
                    <span class="font-bold text-error"> might result checkin failure.</span>
                </p>
            </div>
            <div class="modal-action">
                <button on:click={() => (open = false)} class="btn btn-primary w-full">GOT IT!</button>
            </div>
        </div>
    </div>
{/if}
