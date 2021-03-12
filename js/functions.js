const template = `<article class="my-3" id="twig">
<div class="bd-heading sticky-xl-top align-self-start mt-5 mb-3 mt-xl-0 mb-xl-2">
  <h3>Twig</h3>
</div>
<div>
  <div class="row  row-cols-1 row-cols-md-1 g-4">
    <div class="col">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">{{title}}</h5>
          <p class="card-text">
            {{description}}
            <div class="accordion" id="accordionExample">
                {{#files}}
                <div class="accordion-item">
                    <h2 class="accordion-header" id="heading{{@index}}">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse{{@index}}" aria-expanded="false" aria-controls="collapse{{@index}}">
                        {{name}}
                    </button>
                    </h2>
                    <div id="collapse{{@index}}" class="accordion-collapse collapse" aria-labelledby="heading{{@index}}" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <pre style="white-space: pre-wrap;">{{code}}</pre>
                    </div>
                    </div>
                    </div>
                {{/files}}
            </p>
            {{#tags}}
            <span class="badge rounded-pill bg-primary">{{.}}</span>
            {{/tags}}
        </div>
      </div>
    </div>
</div>
</article>`;

window.onload = function() {
    fetch("data/snippets.json")
        .then(response => response.json())
        .then(json => {
            const articleList = document.getElementById("content");

            const compiledTemplate = Handlebars.compile(template);

            json.snippets.forEach(element => {
                articleList.innerHTML += compiledTemplate(element);
            });
        });
};