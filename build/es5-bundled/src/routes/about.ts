import { html, customElement, css, property } from "lit-element";
import { PageViewElement } from "../components/page-view-element";
import skills, { ISkills } from "../data/skill-logo";

@customElement("mx-about")
export class About extends PageViewElement {
  static get styles() {
    return [
      css`
        :host {
          height: 100%;
          width: 100%;
          padding-top: 64px;
        }

        .container {
          max-width: 1024px;
          padding: 0 16px;
          margin: auto;
        }

        h3 {
          margin-top: 0;
        }

        .skills-container {
          display: flex;
        }

        .skill-value:not(:last-child) {
          margin-right: 32px;
        }

        .skill-value {
          z-index: 3;
          position: relative;
          margin-bottom: 32px;
          text-align: center;
          display: inline-block;
        }

        .skill-value img {
          height: 50px;
        }

        .skill-value p {
          left: 50%;
          transform: translate(-50%, -50%);
          position: absolute;
        }
        a {
          text-decoration: none;
          color: #0043e8;
        }
        li:not(:last-child) {
          margin-bottom: 4px;
        }
      `
    ];
  }

  @property({ type: Object })
  private typer:
    | {
        timer: NodeJS.Timeout;
        target: HTMLElement;
      }
    | undefined = undefined;

  private typeSkillName = (element: HTMLElement, name: string) => {
    let index = 0;
    element.innerText = " ";
    this.typer = {
      timer: setInterval(() => {
        element.innerText += name[index];
        index++;
        if (index === name.length) {
          clearInterval(this.typer!.timer);
        }
      }, 75),
      target: element
    };
  };

  private resetTyper = () => {
    if (this.typer) {
      clearInterval(this.typer.timer);
      this.typer.target.innerHTML = "&nbsp;";
    }
  };

  private handleSkillMouseEnter = (event: Event) => {
    const targetElement = event.target as Element;
    const elementList = targetElement.getElementsByTagName("p");
    if (!elementList.length) {
      return;
    }
    this.typeSkillName(elementList[0], targetElement.id);
  };

  private handleSkillMouseLeave = () => {
    this.resetTyper();
  };

  private getSkills = (skills: ISkills) =>
    skills.map(
      category => html`
        <div>
          <h4>${category.name}</h4>
          <!-- <div class="skills-container"> -->
          ${category.set.map(
            skill =>
              html`
                <div
                  class="skill-value"
                  id="${skill.name}"
                  @mouseenter="${this.handleSkillMouseEnter}"
                  @mouseleave="${this.handleSkillMouseLeave}"
                >
                  <img src=${skill.src} />
                  <p>&nbsp;</p>
                </div>
              `
          )}
          <!-- </div> -->
        </div>
      `
    );

  protected render() {
    return html`
      <div class="container">
        <h3>Introduction</h3>
        <p>
          I am a Full-Stack Web Developer, passionate about the Web with a
          B.Tech degree in Computer Science and Engineering from The LNM
          Institute of Information Technology, Jaipur, India. I love building
          things, I am a design enthusiast, having some designing experience. A
          Music addict, foodie and hard worker.
        </p>
        <p>
          Some of my favourite work include
          <ul>
            <li>
              <a href="/work/smart-grid">Smart Grid</a
              >: Created to replace ag-grid in one of the Innovaccer's App to
              reduce bundle size (50% reduction).
            </li>
            <li>
              <a href="/work/budget-book">Budget Book</a
              >: A expense management app, created to manage my own expense
              after trying all other awesome apps
            </li>
            <li>
              <a href="/work/plinth-2017">Plinth 2017</a
              >: A platform through which various participant view information regarding various events and can register and pay for the event. This was one of the very few college fest website with complete event management at the time.
            </li>
          </ul>
        </p>

        <h3>Skills</h3>
        <div class="flex">
          ${this.getSkills(skills)}
        </div>
      </div>
    `;
  }
}
