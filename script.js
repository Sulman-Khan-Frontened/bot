$(document).ready(() => {
    // Handle Button State.
    $("#_chat").on("input", function (e) {
        if (!($(this).val().length <= 0)) {
            $("#submit").addClass('active');
        } else {
            $("#submit").removeClass('active');
        }
    });

    // Handle Button Click.
    $("#submit").click((e) => {
        e.preventDefault();
        const data = JSON.stringify({
            messages: [
                {
                    role: 'user',
                    content: $("#_chat").val(),
                }
            ],
            model: 'gpt-4-turbo-2024-04-09',
            max_tokens: 100,
            temperature: 0.9
        });
        if (!$("#_chat").val().length <= 0) {
            $("#submit").removeClass("active");
            $("#submit").addClass("loading");
            $.ajax({
                url: 'https://cheapest-gpt-4-turbo-gpt-4-vision-chatgpt-openai-ai-api.p.rapidapi.com/v1/chat/completions',
                type: 'POST',
                headers: {
                    'x-rapidapi-key': '6a013f0d27msh70f1627692d4818p14983cjsn863ce6896ac6',
                    'x-rapidapi-host': 'cheapest-gpt-4-turbo-gpt-4-vision-chatgpt-openai-ai-api.p.rapidapi.com',
                    'Content-Type': 'application/json'
                },
                data: data,
                success: function (response) {
                    $("#submit").removeClass("loading");
                    $(".main-container").addClass("active");
                    $('.main-container').animate({ scrollTop: $('.main-container')[0].scrollHeight }, 'fast');
                    $(".main-container").append(`
                                <x-chat-user>
                                        <x-indicator>
                                            <p>
                                                <i class="fa-solid fa-user"></i>
                                            </p>
                                        </x-indicator>
                                        <x-chat-text>
                                            ${  ($("#_chat").val())}
                                        </x-chat-text>
                                    </x-chat-user>

                                    <x-chat-bot>
                                        <x-indicator>
                                            <p>
                                                <i class="fa-solid fa-computer"></i>
                                            </p>
                                        </x-indicator>
                                        <x-chat-text>
                                            ${response.choices[0].message.content}
                                        </x-chat-text>
                                    </x-chat-bot>
                                `);$("#_chat").val('');

                },
                error: function (xhr, status, error) {
                    console.error(xhr.responseText);
                }
            });
        }
    });
});
