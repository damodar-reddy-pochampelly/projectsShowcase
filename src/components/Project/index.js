import {Component} from 'react'
import Loader from 'react-loader-spinner'

import {
  BgContainer,
  Header,
  WebsiteLogo,
  BodyContainer,
  TypeOfProjects,
  ProjectType,
  LoadingContainer,
  FailureContainer,
  FailureImage,
  FailureHeading,
  FailureDescription,
  RetryButton,
  ProjectsContainer,
  ProjectItem,
  ProjectImage,
  ProjectName,
} from './styledComponents'

const categoriesList = [
  {id: 'ALL', displayText: 'All'},
  {id: 'STATIC', displayText: 'Static'},
  {id: 'RESPONSIVE', displayText: 'Responsive'},
  {id: 'DYNAMIC', displayText: 'Dynamic'},
  {id: 'REACT', displayText: 'React'},
]

const apiStatusConstants = {
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
  initial: 'INITIAL',
}

class Project extends Component {
  state = {
    activeCategory: 'ALL',
    apiStatus: apiStatusConstants.initial,
    projectsList: [],
  }

  onChangeCategory = event => {
    this.setState({activeCategory: event.target.value}, this.getProjects)
  }

  componentDidMount = () => {
    this.getProjects()
  }

  getProjects = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const {activeCategory} = this.state
    const url = `https://apis.ccbp.in/ps/projects?category=${activeCategory}`
    const response = await fetch(url)
    if (response.ok === true) {
      const data = await response.json()
      const modifiedData = data.projects.map(eachProject => ({
        id: eachProject.id,
        name: eachProject.name,
        imageUrl: eachProject.image_url,
      }))
      this.setState({
        apiStatus: apiStatusConstants.success,
        projectsList: modifiedData,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderLoadingView = () => (
    <LoadingContainer data-testid="loader">
      <Loader type="ThreeDots" width={50} height={50} color="#328af2" />
    </LoadingContainer>
  )

  renderFailureView = () => (
    <FailureContainer>
      <FailureImage
        src="https://assets.ccbp.in/frontend/react-js/projects-showcase/failure-img.png"
        alt="failure view"
      />
      <FailureHeading>Oops! Something Went Wrong</FailureHeading>
      <FailureDescription>
        We cannot seem to find the page you are looking for.
      </FailureDescription>
      <RetryButton type="button" onClick={this.getProjects}>
        Retry
      </RetryButton>
    </FailureContainer>
  )

  renderSuccessView = () => {
    const {projectsList} = this.state

    return (
      <ProjectsContainer>
        {projectsList.map(eachProject => (
          <ProjectItem key={eachProject.id}>
            <ProjectImage src={eachProject.imageUrl} alt={eachProject.name} />
            <ProjectName>{eachProject.name}</ProjectName>
          </ProjectItem>
        ))}
      </ProjectsContainer>
    )
  }

  renderApiResults = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderSuccessView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  render() {
    const {activeCategory} = this.state
    return (
      <BgContainer>
        <Header>
          <WebsiteLogo
            src="https://assets.ccbp.in/frontend/react-js/projects-showcase/website-logo-img.png"
            alt=" website logo"
          />
        </Header>
        <BodyContainer>
          <TypeOfProjects
            onChange={this.onChangeCategory}
            value={activeCategory}
          >
            {categoriesList.map(eachCategory => (
              <ProjectType value={eachCategory.id} key={eachCategory.id}>
                {eachCategory.displayText}
              </ProjectType>
            ))}
          </TypeOfProjects>
          {this.renderApiResults()}
        </BodyContainer>
      </BgContainer>
    )
  }
}

export default Project
