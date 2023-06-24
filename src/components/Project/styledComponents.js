import styled from 'styled-components'

export const BgContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`
export const Header = styled.div`
  background-color: #f1f5f9;
  padding: 10px 50px;
`

export const WebsiteLogo = styled.img`
  width: 120px;
`

export const BodyContainer = styled.div`
  padding: 30px 50px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`

export const TypeOfProjects = styled.select`
  border: 1px solid #cbd5e1;
  width: 300px;
  padding: 6px 8px;
  outline: none;
  border-radius: 5px;
`

export const ProjectType = styled.option`
  font-family: 'Roboto';
  font-size: 15px;
  color: #475569;
`
export const LoadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
`

export const FailureContainer = styled(LoadingContainer)`
  flex-direction: column;
`

export const FailureImage = styled.img`
  width: 300px;
`

export const FailureHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 30px;
  color: #475569;
  margin-bottom: 10px;
`
export const FailureDescription = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  color: #475569;
  margin-top: 0px;
`
export const RetryButton = styled.button`
  background-color: #328af2;
  border: none;
  font-family: 'Roboto';
  font-size: 13px;
  color: #ffffff;
  padding: 5px 20px;
  border-radius: 3px;
`
export const ProjectsContainer = styled.ul`
  padding-left: 0px;
  display: flex;
  flex-wrap: wrap;
  flex-grow: 1;
  margin-top: 40px;
`
export const ProjectItem = styled.li`
  list-style-type: none;
  margin-right: 10px;
  margin-bottom: 20px;
  border-radius: 8px;
  border: 1px solid #e6e9ec;
  box-shadow: 1px 4px 4px #e2e8f0;
  width: 250px;
`
export const ProjectImage = styled.img`
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;
  width: 100%;
  height: 70%;
`

export const ProjectName = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  color: #475569;
  font-weight: 500;
  padding: 8px 20px;
  margin-top: 0px;
`
