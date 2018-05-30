import bytesToSize from '../index.js'

describe('bytesToSize', () => {
  it('should return "0 Bytes"', () => {
    expect(bytesToSize(0)).toEqual('0 Bytes')
  })
  
  it('should return "1 Bytes"', () => {
    expect(bytesToSize(1)).toEqual('1 Bytes')
  })
  
  it('should return "1 KB"', () => {
     expect(bytesToSize(1024)).toEqual('1 KB')
  })

  it('should return "1 MB"', () => {
    expect(bytesToSize(1048576)).toEqual('1 MB')
  })

  it('should return "1 GB"', () => {
    expect(bytesToSize(1073741824)).toEqual('1 GB')
  })

  it('should return "1 TB"', () => {
    expect(bytesToSize(1099511627776)).toEqual('1 TB')
  })
})